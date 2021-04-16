//needs to be finished -Tate

import { PlayList } from "./PlayList";
import { Sample } from "./Sample";
import { UploadMusic } from "./UploadMusic";
import { UserProject } from "./UserProject";
import { Comments } from "./Comments";

export interface User
{
    id: number,
    userName: string,
    email: string,
    isAdmin: boolean,

    userProjects: UserProject[],
    sample: Sample[],
    comments: Comments[],
    uploadMusics: UploadMusic[],
    playlists: PlayList[]
}