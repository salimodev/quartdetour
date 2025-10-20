<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

final class HomeController extends AbstractController
{
     #[Route(path: '/layout', name: 'app_home')]
    public function Layout(): Response
    {
        
        return $this->render('layout.html.twig');
    }

     #[Route(path: '/header', name: 'app_header')]
    public function header(): Response
    {
       
        return $this->render('/header.html.twig');
    }

    
     #[Route(path: '/sideheader', name: 'sideheader')]
    public function sideheader(Request $request): Response
    {
        $session =$request->getSession();
        return $this->render('/sideHeader.html.twig');
    }

    #[Route(path: '/footer', name: 'app_footer')]
     public function footer(): Response
    {
       
        return $this->render('/footer.html.twig');
    }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        
        return $this->render('home/index.html.twig');
    }
}
