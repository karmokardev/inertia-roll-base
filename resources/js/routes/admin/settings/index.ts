import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import general5d934c from './general'
import logoFavicon8e0c49 from './logo-favicon'
/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
export const general = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

general.definition = {
    methods: ["get","head"],
    url: '/admin/settings/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
general.url = (options?: RouteQueryOptions) => {
    return general.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
general.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
general.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: general.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
const generalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
generalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SiteSettingsController::general
* @see app/Http/Controllers/Admin/SiteSettingsController.php:15
* @route '/admin/settings/general'
*/
generalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: general.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

general.form = generalForm

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
export const logoFavicon = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logoFavicon.url(options),
    method: 'get',
})

logoFavicon.definition = {
    methods: ["get","head"],
    url: '/admin/settings/logo-favicon',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
logoFavicon.url = (options?: RouteQueryOptions) => {
    return logoFavicon.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
logoFavicon.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logoFavicon.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
logoFavicon.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logoFavicon.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
const logoFaviconForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logoFavicon.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
logoFaviconForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logoFavicon.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\SettingController::logoFavicon
* @see app/Http/Controllers/Admin/SettingController.php:15
* @route '/admin/settings/logo-favicon'
*/
logoFaviconForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logoFavicon.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logoFavicon.form = logoFaviconForm

const settings = {
    general: Object.assign(general, general5d934c),
    logoFavicon: Object.assign(logoFavicon, logoFavicon8e0c49),
}

export default settings