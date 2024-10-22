
import {ProjectType} from "../models/ProjectType.js";

export class ProjectTypeDAO{
    static async getAllProjectTypes(){
        return await ProjectType.find();
    }

    static async updateProjectType(ProjectTypeId,updateDataProjectType){
        return await ProjectType.findByIdAndUpdate(ProjectTypeId,updateDataProjectType,{new: true});
    }

    static async deleteProjectType(ProjectTypeId){
        return await ProjectType.findByIdAndDelete(ProjectTypeId);
    }

    static async createProjectType(ProjectTypedata){
        const projectType = new ProjectType(ProjectTypedata);
        return await projectType.save();
    }

    static async getProjectTypeById(ProjectTypeId){
        return await ProjectType.findById(ProjectTypeId);
    }
}