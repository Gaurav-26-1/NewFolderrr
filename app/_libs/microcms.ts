import {createClient} from "microcms-js-sdk";
import type{
   MicroCMSQueries,
   MicroCMSImage,
   MicroCMSListContent,
   MicroCMSContentId,
}from "microcms-js-sdk";
import Skill from "../_components/skill";
export type work = {
   name:string;
   position:string;
   profile:string;
   image:MicroCMSImage;
}& MicroCMSListContent;

export type Category={
  name: string;
};
export type Skill = {
   id:string;
   title:string;
   category: {
      name:string;
   };
   publishedAt: string;
   createdAt:string;
};
if(!process.env.MICROCMS_SERVICE_DOMAIN) {
   throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if(!process.env.MICROCMS_API_KEY) {
   throw new Error("MICROCMS_API_KEY is requried");
}
const client = createClient({
   serviceDomain:process.env.MICROCMS_SERVICE_DOMAIN,
   apiKey:process.env.MICROCMS_API_KEY,
});
export const getMembersList =async (queries?: MicroCMSQueries)=> {
   const listData = await client.getList<Skill>({
      endpoint:"skills",
      queries,
   });
   return listData;
};