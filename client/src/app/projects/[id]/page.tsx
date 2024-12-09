import React, { useState } from 'react'
import ProjectHeader from '@/app/projects/ProjectHeader'
import Board from '@/app/projects/BoardView'
import ListView from '../ListView'
import TimeLine from '../TimelineView'
import Table from '../TableView'
import ModalNewTask from '@/components/ModelNewTask'

type Props = {
    params: {
        id: string
    }
}

const Project = ({params}: Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState('Board');
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
        <div>
            <ModalNewTask 
                isOpen={isModalNewTaskOpen} 
                onClose={() => setIsModalNewTaskOpen(false)} 
                id={id}
            />
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'Board' && (
                <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === 'List' && (
                <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === 'Timeline' && (
                <TimeLine id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === 'Table' && (
                <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    )
}

export default Project