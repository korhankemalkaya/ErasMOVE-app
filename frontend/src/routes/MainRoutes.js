import React from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import DashboardContainer from '../containers/DashboardContainer';
import ApplicationList from '../components/studentLists/ApplicationList';
import PlacementList from '../components/studentLists/PlacementList';
import WaitingList from '../components/studentLists/WaitingList';
import Universities from '../components/Universities';
import RequestsPage from '../components/RequestsPage';
import CourseRequestPage from '../components/CourseRequestPage';
import Announcements from '../components/Announcements';
import UserProfile from '../components/UserProfile';
import Application from '../components/Application';
import HostUniversity from '../components/HostUniversity';
import PreApprovalsPage from '../components/PreApprovalsPage';
import ToDoListPage from '../components/ToDoListPage';
import AdminUsersPage from '../components/AdminUsersPage';
import ProposalPage from '../components/ProposalPage';
import ProposalPageForStudent from '../components/ProposalPageForStudent';




const MainRoutes = {
    path: '/main',
    element: <MainLayout />,
    children: [
        {
            path: '/main',
            element: <Announcements />
        },
        {
            path: '/main/applicationList',
            element: <ApplicationList />
        },
        {
            path: '/main/placementList',
            element: <PlacementList />
        },
        {
            path: '/main/waitingList',
            element: <WaitingList />
        },
        {
            path: '/main/proposal',
            element: <ProposalPage />
        },
        {
            path: '/main/proposalForStudent',
            element: <ProposalPageForStudent />
        },
        {
            path: '/main/universities',
            element: <Universities />
        },
        {
            path: '/main/requests',
            element: <RequestsPage />
        },
        {
            path: '/main/courseRequests',
            element: <CourseRequestPage />
        },
        {
            path: '/main/announcements',
            element: <Announcements />
        },
        {
            path: '/main/profile',
            element: <UserProfile />
        },
        {
            path: '/main/application',
            element: <Application />
        },
        {
            path: '/main/hostUniversity',
            element: <HostUniversity />
        },{
            path: '/main/preApprovalForms',
            element: <PreApprovalsPage />
        },
        {
            path: '/main/toDoList',
            element: <ToDoListPage />
        },
        {
            path: '/main/adminUsersPage',
            element: <AdminUsersPage />
        },
    
    ]
};

export default MainRoutes;
