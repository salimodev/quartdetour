<?php

namespace App\Controller;


use App\Service\pieceService;
use App\Entity\Pieces;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

final class ProprietaireController extends AbstractController
{
  #[Route('/proprietaire', name: 'app_proprietaire')]
    public function index(Request $request): Response
    {
       $session =$request->getSession();
       $session->set('PageMenu', 'proprietaire');
        return $this->render('proprietaire/proprietaire.html.twig');
    }

     #[Route('/proprietaire/demande', name: 'app_proprietaire_demande')]
    public function demande(Request $request): Response
    {
       $session =$request->getSession();
       $session->set('PageMenu', 'demande');
        return $this->render('proprietaire/demande.html.twig');
    }

     #[Route('/proprietaire/demande2', name: 'app_proprietaire_demande2')]
    public function demande2(Request $request): Response
    {
       $session =$request->getSession();
       $session->set('PageMenu', 'demande');
        return $this->render('proprietaire/demande2.html.twig');
    }

    #[Route('/proprietaire/demande2/ajouter', name: 'add_piece')]
     public function ajouter_piece(Request $request, pieceService $pieceservice ,ManagerRegistry $doctrine){

        $pieces = new Pieces();
        $designation = $request->get('designation');
        $reference = $request->get('reference');
        $photo =  $request->get('photo');
        $observation = $request->get('observation');

      $result =  $pieceservice->ajouterPiece($designation,$reference,$photo,$observation);
      return new JsonResponse($result);
    }

}