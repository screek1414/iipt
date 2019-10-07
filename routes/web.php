<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('courses', 'CourseController@index');
Route::get('courses/add', 'CourseController@index')->middleware('auth');
Route::get('courses/edit/{id}', 'CourseController@index')->middleware('auth');
Route::get('courses/show/{id}', 'CourseController@index')->name('courses.show');
Route::post('courses/items', 'CourseController@courses');
Route::post('courses/search', 'CourseController@search');
Route::post('courses/store', 'CourseController@store');
Route::post('courses/show', 'CourseController@show');
Route::post('courses/edit', 'CourseController@edit');
Route::post('courses/update', 'CourseController@update');
Route::post('courses/destroy', 'CourseController@destroy');
Route::post('courses/create', 'CourseController@create');

Route::get('dashboard', 'DashboardController@index');
Route::get('dashboard/add', 'DashboardController@index')->middleware('auth');
Route::get('dashboard/edit', 'DashboardController@index')->middleware('auth');
Route::get('dashboard/show', 'DashboardController@index')->name('dashboard.show');
Route::post('dashboard/users', 'DashboardController@users');
Route::post('dashboard/changerole', 'DashboardController@changerole');
