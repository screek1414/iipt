<?php

namespace Tests\Unit;

use App\User;
use Tests\TestCase;

class CourseControllerTest extends TestCase
{
    public function testGetCourse()
    {
        $user = $this->fakeAuth();
        $response = $this->actingAs($user)
            ->post('/courses/items');
        dump($response);

        $response->assertStatus(200);
    }

    public function testShow()
    {
        $user = $this->fakeAuth();
        $response = $this->actingAs($user)
            ->post('/courses/show', ['id' => 4]);
        dump($response);

        $response->assertStatus(200);
    }

    public function testCreate()
    {
        $user = $this->fakeAuth();
        $response = $this->actingAs($user)
            ->post('/courses/create');
        dump($response);

        $response->assertStatus(200);
    }

    public function fakeAuth()
    {
        $user = factory(User::class)->make([
            'email' => 'admin@admin.com',
            'password' => 'q9seswAg'
        ]);
        return User::find(1);
    }
}
