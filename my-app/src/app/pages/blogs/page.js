import React from 'react'
import '../../style/home/blogs.css'
 const Blogs = () => {
  return (
    <div>
        <nav className='fluid-container blogs-nav' style={{background:'#0F172AB3'}}>
            <div className='d-flex align-items-center px-4 pt-4'>
                <div className='flex-grow-1'>
                <img className='img-fluid flex-grow-1' height={240} width={240} src='https://cdn.hashnode.com/res/hashnode/image/upload/v1711444844938/nFIcObtGA.png?w=1000&h=250&auto=compress,format&format=webp' />
                </div>
                <div className='d-flex gap-3 align-items-center   ' style={{fontSize:"21px"}}>
                <i className="bi bi-search top-icons px-2 py-1 text-white"></i>
                <i className="bi bi-brightness-high top-icons px-2 py-1  text-white"></i>
                <i className="bi bi-chevron-down top-icons px-2 py-1  text-white"></i>
                </div>
            </div>
          
                <div className='d-flex gap-4  justify-content-end px-4 mt-4 pt-2'>
                <div className='follow align-items-center'><i className="bi bi-person-plus text-primary" style={{fontSize:"20px"}}></i><div className='text-primary'>Follow</div></div>
                <i className="bi bi-envelope-plus text-white" style={{fontSize:"20px"}}></i>

                </div>
       
            <div className='d-flex gap-5 mt-4 pt-2 justify-content-center text-white'>
                <div className='blog-nav-sections1'><p>Home</p><div className=' hr-line text-white bg-white position-absolute'></div></div>
                <p className='blog-nav-sections2'>Newsletter</p>
                <p className='blog-nav-sections2'>Members</p>
                
            </div>
            
        </nav>
        <main className='pb-5' style={{background:'#000000'}}>
            <div className='row mx-4 my-5'>
                <div className='col-md-8 text-white'>
                    <img className='img-fluid rounded' src='https://cdn.hashnode.com/res/hashnode/image/upload/v1712839684679/7e899836-029e-4755-b7b5-741a125f2df0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'/>
                    <h1 className='blogs-heading'>TCS Syllabus 2024 (Updated)</h1>
                    <h5 className='blogs-subheading'>TCS NQT Detailed Syllabus 2024 For people looking for TCS Syllabus 2024 for both On-Campus and Off-Campus Placements, this post will answer all the questions for you. This article covers all the information about TCS Syllabus 2024. As per the latest ...</h5>
                    <div  className='d-flex align-items-top mt-3'>
                        <div><img className='img-fluid'height={30} width={30} src='/image/computer-icon.png'/></div>
                        <div className='d-flex flex-column'>
                            <h6 style={{fontSize:'16.5px',fontWeight:'600',color:'#94A3B8'}} >shubham paliwal</h6>
                            <div style={{marginTop:'-7px',color:'#94A3B8'}} className='d-flex gap-2'><i className="bi bi-book "></i><p>3 min read</p></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 px-4'>
                    <div className='row' >
                            <img className='img-fluid rounded' src='https://cdn.hashnode.com/res/hashnode/image/upload/v1683525313231/RC4cg5koq.png?w=1600&h=840&fit=crop&crop=entropy&auto=format&auto=compress,format&format=webp'/>
                        <h5 className='blogs-side-heading  px-4 pt-4'>Tech Mahindra Exam Process 2024 For Freshers</h5>
                        <div  className='d-flex px-4 align-items-top mt-3'>
                        <div><img className='img-fluid'height={30} width={30} src='/image/computer-icon.png'/></div>
                        <div className='d-flex flex-column'>
                            <h6 style={{fontSize:'16.5px',fontWeight:'600',color:'#94A3B8'}} >shubham paliwal</h6>
                            <div style={{marginTop:'-7px',color:'#94A3B8'}} className='d-flex gap-2'><i className="bi bi-book "></i><p>3 min read</p></div>
                        </div>
                    </div>
                    </div>
                    <div className='row mx-1 w-100 h-50 rounded' style={{background:'#1e293b'}}>
                        
                    </div>
                </div>

            </div>
        </main>
        <footer  className='blogs-footer' style={{background:'#020617'}}>
        <div className='d-flex align-items-center px-5 pt-5'>
                <div className='flex-grow-1'>
                <img className='img-fluid flex-grow-1' height={200} width={200} src='https://cdn.hashnode.com/res/hashnode/image/upload/v1711444844938/nFIcObtGA.png?w=1000&h=250&auto=compress,format&format=webp' />
                </div>
            </div>
            <div className='px-5' style={{fontSize:'14.5px',color:' #F1F5F9'}}>
                <ul className='d-flex gap-4 text-white justify-content-end'>
                <li className="no-bullet">Archive</li><li>Privacy policy</li><li>
                Terms</li>
                </ul>
            </div>
            <div className='d-flex justify-content-center pt-5 pb-3'>
            <div className='d-flex justify-content-end gap-1' style={{width:'45px',color:'#94A3B8'}}>
            <svg  fill="none" className="h-2 w-3 stroke-current" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="1.5" d="M11.2 5.06s.3-1.295.8-1.295.8 1.295.8 1.295c1.34 4.47 1.67 4.8 6.14 6.14 0 0 1.295.3 1.295.8s-1.295.8-1.295.8c-4.47 1.34-4.8 1.67-6.14 6.14 0 0-.3 1.295-.8 1.295s-.8-1.295-.8-1.295c-1.34-4.47-1.67-4.8-6.14-6.14 0 0-1.295-.3-1.295-.8s1.295-.8 1.295-.8c4.47-1.34 4.8-1.67 6.14-6.14Z"></path></svg>
            <svg  fill="none" className="h-1 w-1 stroke-current" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="1.5" d="M11.2 5.06s.3-1.295.8-1.295.8 1.295.8 1.295c1.34 4.47 1.67 4.8 6.14 6.14 0 0 1.295.3 1.295.8s-1.295.8-1.295.8c-4.47 1.34-4.8 1.67-6.14 6.14 0 0-.3 1.295-.8 1.295s-.8-1.295-.8-1.295c-1.34-4.47-1.67-4.8-6.14-6.14 0 0-1.295-.3-1.295-.8s1.295-.8 1.295-.8c4.47-1.34 4.8-1.67 6.14-6.14Z"></path></svg>
            <svg  fill="none" className="h-1 w-1 stroke-current" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="1.5" d="M11.2 5.06s.3-1.295.8-1.295.8 1.295.8 1.295c1.34 4.47 1.67 4.8 6.14 6.14 0 0 1.295.3 1.295.8s-1.295.8-1.295.8c-4.47 1.34-4.8 1.67-6.14 6.14 0 0-.3 1.295-.8 1.295s-.8-1.295-.8-1.295c-1.34-4.47-1.67-4.8-6.14-6.14 0 0-1.295-.3-1.295-.8s1.295-.8 1.295-.8c4.47-1.34 4.8-1.67 6.14-6.14Z"></path></svg>
            <svg  fill="none" className="h-1 w-1 stroke-current" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="1.5" d="M11.2 5.06s.3-1.295.8-1.295.8 1.295.8 1.295c1.34 4.47 1.67 4.8 6.14 6.14 0 0 1.295.3 1.295.8s-1.295.8-1.295.8c-4.47 1.34-4.8 1.67-6.14 6.14 0 0-.3 1.295-.8 1.295s-.8-1.295-.8-1.295c-1.34-4.47-1.67-4.8-6.14-6.14 0 0-1.295-.3-1.295-.8s1.295-.8 1.295-.8c4.47-1.34 4.8-1.67 6.14-6.14Z"></path></svg>
            
            </div>
            </div>
            <div className='d-flex justify-content-center pt-4 pb-2'>
            <div style={{width:'30px'}} >
          <svg class="h-8 w-8 fill-current" viewBox="0 0 200 200" fill="#94A3B8"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"></path></svg>
            </div>
            </div>

            <div className='d-flex text-white justify-content-center pt-3'>
                <p style={{color:'#94A3B8', fontSize:'90%'}}>Powered by Hashnode - Build your developer hub.</p>
                
            </div>
            <div className='d-flex justify-content-center pb-5 mb-5 mt-2 gap-3'>
                <div className='blogs-footer-button'>Start your blog</div>
                <div className='blogs-footer-button'>Create docs</div>
            </div>
        </footer>
    </div>
  )
}

export default Blogs;
