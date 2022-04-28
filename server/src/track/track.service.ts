import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./schemas/track.schema";
import {Model, ObjectId} from 'mongoose'
import {Comment, CommentDocument} from "./schemas/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {FileService, FileType} from "../file/file.service";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackRepository: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentRepository: Model<CommentDocument>,
                private fileService: FileService) {}

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.create(FileType.AUDIO, audio)
        const picturePath = this.fileService.create(FileType.IMAGE, picture)
        const track  = await this.trackRepository.create({...dto, listening: 0, audio: audioPath, picture: picturePath})
        return track
    }
    async getAll(): Promise<Track[]> {
        const tracks = await this.trackRepository.find()
        return tracks
    }
    async getOne(id:ObjectId): Promise<Track> {
        const track = await this.trackRepository.findById(id).populate('comments')
        return track
    }
    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackRepository.findByIdAndDelete(id)
        return track._id
    }
    async addComment(dto: CreateCommentDto): Promise<Comment>{
        const track = await this.trackRepository.findById(dto.trackId)
        const comment = await this.commentRepository.create({...dto})
        track.comments.push(comment._id)
        await track.save()
        return comment
    }

    async incrementListening(id:ObjectId) {
        const track = await this.trackRepository.findById(id)
        track.listening++
        track.save()
    }

}
