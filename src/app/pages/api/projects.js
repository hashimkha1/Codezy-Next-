// pages/api/projects.js

import connectToDatabase from '../../lib/mongoose';
import Project from '../../models/Project';

export default async function handler(req, res) {
  await connectToDatabase(); // Connect to the database

  switch (req.method) {
    case 'GET':
      try {
        const projects = await Project.find({}); // Fetch all projects
        res.status(200).json({ projects });
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
      }
      break;
    
    case 'POST':
      try {
        const newProject = new Project(req.body); // Create a new project
        await newProject.save();
        res.status(201).json({ message: 'Project added successfully!' });
      } catch (error) {
        res.status(400).json({ error: 'Failed to add project' });
      }
      break;
    
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
