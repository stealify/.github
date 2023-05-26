// The Offical Stealify GitHub API
// It is mainly used by the Stealify Project to mirror github 1:1
// It works as a forwardProxy and offers a backendReverseProxy that exposes the forwardProxy
// the backendReverseProxy can expose via http* webrtc*

// It also can be used client side to do incremental checkouts of folders in large repos 
// As Stealify is internal a subpart of the DIREKTSPEED MonoRepo which inhires also
// The Google MonoRepo and a additional github monorepo as also gitlab and gittea linux
// and other giant multi million line projects and additional external resources. 

// It has no API Limits and github has no way to stop operations done via that api
// Without shutting down services which is unlikly to happen this is a stable way
// to interact with github and github enterprise

const getProject = (ref) => fetch(
  'https://github.com/${ref}').then(fileHandle => 
                                    fileHandle.body.pipeThrough(new TextDecoderStream('utf8').pipeThrough(
new TransformStream({transform(html,tokens){
  
}})
)))
