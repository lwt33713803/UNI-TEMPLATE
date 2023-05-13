import { post } from '@/utils/http/interceptor'
import { get } from '../utils/http/interceptor';

export const test = (name: string,status:string) =>
  get<{
        code:number,
        data:{
            _: number,
            messages: string
        }
    },
    {}
  >('/@xiuche_dafeiji')