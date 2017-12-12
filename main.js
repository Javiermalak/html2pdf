{
    angular
        .module( 'App' , [] )
        .controller ( 'Controller', fun )
    
    function fun( $scope , $http )
    {
        $scope.print = () =>                
            $http.post( './index.php', { html : '<h1>asd</h1>' } )
                .then( e => console.log(e) )
    }
    
    function generateLink( data , id , name = "PDF.pdf" )
    {
        let pdfBin = new Blob( [ data ] )
        let ref = ( window.URL || window.webkitURL ).createObjectURL( pdfBin )
        let downLi = document.createElement("a")
        let parent = document.getElementById(id)
        
        parent.innerHTML = '';
        parent.appendChild( downLi )        
        downLi.download = name;
        downLi.href = ref;
        
        downLi.click()
    }
}