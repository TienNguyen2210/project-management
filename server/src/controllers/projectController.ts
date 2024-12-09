import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving projects: ${error.message}` });
    }
}


export const createProject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, startDate, dueDate } = req.body;
        const project = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                dueDate,
            },
        });
        res.status(201).json(project);
    } catch (error: any) {
        res.status(500).json({ message: `Error creating project": ${error.message}` });
    }
}