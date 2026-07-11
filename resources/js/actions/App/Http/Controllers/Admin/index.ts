import DashboardController from './DashboardController'
import UsersController from './UsersController'
import RoleController from './RoleController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    UsersController: Object.assign(UsersController, UsersController),
    RoleController: Object.assign(RoleController, RoleController),
}

export default Admin