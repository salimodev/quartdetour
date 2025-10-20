<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
final class AdminController extends AbstractController
{
#[Route(path: '/admin/dashboard', name: 'dashboard_admin')]
    public function dashboard(Request $request): Response
    {
       $session =$request->getSession();
       $session->set('PageMenu', 'dashboard_admin');
        return $this->render('Admin/dashboard.html.twig');
    }

}