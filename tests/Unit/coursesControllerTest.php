<?php

namespace Tests\Unit;

use Illuminate\Foundation\Auth\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class coursesControllerTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testExample()
    {
        $this->assertTrue(true);
    }

    public function testCourses()
    {
        $user = $this->testAuth();
        $response = $this->actingAs($user)
            ->post('/courses/items');
        dump($response);

        $response->assertStatus(200);
    }

    public function testAuth()
    {
        $user = factory(User::class)->make([
            'email' => 'admin@admin.com',
            'password' => 'q9seswAg'
        ]);
        return User::find(1);
    }
}
