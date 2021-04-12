

const scene = new THREE.Scene();
scene.background = new THREE.Color('#DDE3FF')
const camera = new THREE.PerspectiveCamera( 45,
    window.innerWidth / window.innerHeight ,
    0.1 , 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement )
let Texture = new THREE.TextureLoader().load(
    'http://127.0.0.1:8278/cher.png'
);

Texture.wrapS = THREE.RepeatWrapping;
Texture.wrapT = THREE.RepeatWrapping;
Texture.repeat.set( 4 , 4 );


const material = new THREE.MeshBasicMaterial( {   
    // side: THREE.DoubleSide,
    // color:0x7F2100,
    map: Texture,

});
//  const geometry = new THREE.TorusKnotGeometry( 5.7 , 2.3 , 100 , 30 , 2 , 3 )
const geometry = new THREE.PlaneGeometry( 100 , 100 , 1 , 1 )

const color = 0xDDE3FF;
const intensity = 2;
const light = new THREE.DirectionalLight( color , intensity );
light.position.set( -1, 2, 4 );

const cube = new THREE.Mesh( geometry, material );

camera.position.z = 250
cube.position.y = -1;
cube.rotation.x = -45
scene.add( cube );

scene.add( light );

let geometryCy = new THREE.CylinderGeometry( 4 , 4 , 3 , 36);
let materialCy = new THREE.MeshPhongMaterial({
        color: 0x7F2100,
        specular: 0x00b2fc,
        emissive: 0x000000,
        shiniess: 40,
        shading: false,
        blending: THREE.NormalBlending,
        depthTest: true,
})

let cylinder = new THREE.Mesh( geometryCy , materialCy );
cylinder.position.set(-38, 15, 10)
cylinder.rotation.x = -15
scene.add( cylinder ) 

let cylinder2 = new THREE.Mesh( geometryCy , materialCy );
cylinder2.position.set(-26 , 20 , 10)
cylinder2.rotation.x = -15
scene.add( cylinder2 )

let cylinder3 = new THREE.Mesh( geometryCy , materialCy );
cylinder3.position.set(-28 , 10 , 10)
cylinder3.rotation.x = -15
scene.add( cylinder3 )

let cylinder4 = new THREE.Mesh( geometryCy , materialCy );
cylinder4.position.set(-16 , 15 , 10)
cylinder4.rotation.x = -15
scene.add( cylinder4 )

let cylinder5 = new THREE.Mesh( geometryCy , materialCy );
cylinder5.position.set(5 , 15 , 10)
cylinder5.rotation.x = -15
scene.add( cylinder5 )

let cylinder6 = new THREE.Mesh( geometryCy , materialCy );
cylinder6.position.set(27 , 15 , 10)
cylinder6.rotation.x = -15
scene.add( cylinder6 )

let cylinder7 = new THREE.Mesh( geometryCy , materialCy );
cylinder7.position.set(-5 , 20 , 10)
cylinder7.rotation.x = -15
scene.add( cylinder7 )

let cylinder8 = new THREE.Mesh( geometryCy , materialCy );
cylinder8.position.set(16 , 20 , 10)
cylinder8.rotation.x = -15
scene.add( cylinder8 )

let cylinder9 = new THREE.Mesh( geometryCy , materialCy );
cylinder9.position.set(36 , 20 , 10)
cylinder9.rotation.x = -15
scene.add( cylinder9 )

let cylinder10 = new THREE.Mesh( geometryCy , materialCy );
cylinder10.position.set(-6 , 10 , 10)
cylinder10.rotation.x = -15
scene.add( cylinder10 )

let cylinder11 = new THREE.Mesh( geometryCy , materialCy );
cylinder11.position.set(17 , 10 , 10)
cylinder11.rotation.x = -15
scene.add( cylinder11 )

let cylinder12 = new THREE.Mesh( geometryCy , materialCy );
cylinder12.position.set(39 , 10 , 10)
cylinder12.rotation.x = -15
scene.add( cylinder12 )


function animate(){

    requestAnimationFrame( animate );
    // cube.rotation.x -= 0.01;
    // cube.rotation.y += 0.01;
    // checkerboard.rotation.z += 0.01;

    renderer.render( scene, camera );
}

animate()
// renderer.render( scene, camera );

