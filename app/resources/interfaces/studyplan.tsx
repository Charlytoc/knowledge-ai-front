export interface IStudyPlan {
    id?: number
    title: string;
    slug?: string
    description: string;
    created_by?: IProfile
    aiDescription?: string;
  }

export interface IProfile {
  username: string
} 

