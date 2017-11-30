<?php
    require __DIR__.'/vendor/autoload.php';

    use Spipu\Html2Pdf\Html2Pdf;

    $pRaw = file_get_contents("php://input");
    $pData = json_decode($pRaw);
    
    $conv = new Html2Pdf();
    
    if( isset( $pData ) && isset( $pData->html ) )
    {
        $conv->writeHTML( $pData->html );
    }
    else
    {
        $conv->writeHTML('Error');
    }

    $conv->output('pdf.pdf');
?> 