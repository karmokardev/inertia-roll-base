import DashboardController from './DashboardController'
import UsersController from './UsersController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    UsersController: Object.assign(UsersController, UsersController),
}

export default Admin