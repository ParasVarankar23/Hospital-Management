import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './Components/Pages/Login';
import AdminDashboard from './Components/Pages/AdminDashboard';
import UserDashboard from './Components/Pages/UserDashboard';
import StaffDashboard from './Components/Pages/StaffDashboard';
import Dashboard from './Components/Pages/Dashboard';
import DoctorPage from './Components/Pages/DoctorPage';
import DepartmentPage from './Components/Pages/DepartmentPage';
import PatientPage from './Components/Pages/PatientPage';
import NursePage from './Components/Pages/NursePage';
import PaymentPage from './Components/Pages/PaymentPage';
import DoctorListPage from './Components/Pages/DoctorListPage';
import PatientListPage from './Components/Pages/PatientListPage';
import NurseListPage from './Components/Pages/NurseListPage';
import DepartmentListPage from './Components/Pages/DepartmentListPage';
import DoctorPatientPage from './Components/Pages/DoctorPatientPage';
import DoctorPatientListPage from './Components/Pages/DoctorPatientListPage';
import ScheduleAppointmentPage from './Components/Pages/ScheduleAppointmentPage';
import AppointmentPageList from './Components/Pages/AppointmentPageList';
import PatientReportPage from './Components/Pages/PatientReportPage';
import Main from './Components/Pages/Main';
import HomePage from './Components/Pages/Home';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import PaymentListPage from './Components/Pages/PaymentListPage';
import SettingPage from './Components/Pages/SettingPage';
import ForgotPassword from './Components/Pages/ForgotPassword';
import Settings1 from './Components/Pages/Settings1';
import DoctorAppointmentPageList from './Components/Pages/DoctorAppointmentPage';
import DoctorScheduleAppointmentPage from './Components/Pages/DoctorScheduleAppointmentPage';
import DoctorPatientReportPage from './Components/Pages/DoctorPatientReportPage';
import DashboardPatient from './Components/Pages/DashboardPatient';
import ProfilePage from './Components/Pages/ProfilePage';
import MedicalRecordPage from './Components/Pages/MedicalRecordPage';
import Settings2 from './Components/Pages/Settings2';
import AppointmentPage from './Components/Pages/AppointmentPage';
import DoctorAppointmentListPage from './Components/Pages/DoctorAppointmentListPage';

const App = () => {
    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [nurses, setNurses] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [appointments, setAppointments] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Login" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/staff-dashboard" element={<StaffDashboard />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/DoctorPage" element={<DoctorPage doctors={doctors} setDoctors={setDoctors} />} />
                <Route path="/DoctorListPage" element={<DoctorListPage doctors={doctors} setDoctors={setDoctors} />} />
                <Route path="/DepartmentPage" element={<DepartmentPage departments={departments} setDepartments={setDepartments} />} />
                <Route path="/DepartmentListPage" element={<DepartmentListPage departments={departments} setDepartments={setDepartments} />} />
                <Route path="/PatientListPage" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
                <Route path="/PatientPage" element={<PatientPage patients={patients} setPatients={setPatients} />} />
                <Route path="/NurseListPage" element={<NurseListPage nurses={nurses} setNurses={setNurses} />} />
                <Route path="/NursePage" element={<NursePage nurses={nurses} setNurses={setNurses} />} />
                <Route path="/PaymentPage" element={<PaymentPage />} />
                <Route path="/PatientListPage" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
                <Route path="/DoctorPatientPage" element={<DoctorPatientPage patients={patients} setPatients={setPatients} />} />
                <Route path="/DoctorPatientListPage" element={<DoctorPatientListPage patients={patients} setPatients={setPatients} />} />
                <Route path="/ScheduleAppointmentPage" element={<ScheduleAppointmentPage appointments={appointments} setAppointments={setAppointments} />} />
                <Route path="/AppointmentList" element={<AppointmentPageList appointments={appointments} setAppointments={setAppointments} />} />
                <Route path="/PatientReportsPage" element={<PatientReportPage/>}/>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/About" element={<AboutPage/>}/>
                <Route path='/Contact' element={<ContactPage/>}/>
                <Route path="/PaymentListPage" element={<PaymentListPage/>}/>
                <Route path="/Settings" element={<SettingPage/>}/>
                <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
                <Route path="/Settings1" element={<Settings1/>}/>
                <Route path="/DoctorAppointmentPage" element={<DoctorAppointmentPageList/>}/>
                <Route path="/DoctorScheduleAppointmentPage" element={<DoctorScheduleAppointmentPage/>}/>
                <Route path='/DoctorPatientReportPage' element={<DoctorPatientReportPage/>}/>
                <Route path="/DashboardPatient" element={<DashboardPatient/>}/>
                <Route path="/Profile" element={<ProfilePage/>}/>
                <Route path="/MedicalRecords" element={<MedicalRecordPage/>}/>
                <Route path="/Settings2" element={<Settings2/>}/>
                <Route path="/AppointmentUser" element={<AppointmentPage/>} />
                <Route path="/DoctorAppointmentListPage" element={<DoctorAppointmentListPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
