import DashboardController from './DashboardController'
import UsersController from './UsersController'
import RoleController from './RoleController'
import PermissionController from './PermissionController'
import ColorsController from './ColorsController'
import PresetColorController from './PresetColorController'

const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    UsersController: Object.assign(UsersController, UsersController),
    RoleController: Object.assign(RoleController, RoleController),
    PermissionController: Object.assign(PermissionController, PermissionController),
    ColorsController: Object.assign(ColorsController, ColorsController),
    PresetColorController: Object.assign(PresetColorController, PresetColorController),
}

export default Admin