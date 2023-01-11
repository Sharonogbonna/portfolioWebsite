export default function Project(props){
    return(
        <div className='project-card'>
            <div className='project-name'>
            <a href={props.liveLink} target='_blank'><h1>{props.name}</h1></a>
            </div>
            <div className='cover-photo'>
            <a href={props.liveLink} target='_blank'><img className='cover-photo' src={'../'+ props.coverPhoto} alt='screenshot of project'/></a>
            </div>
            <div className='github'>
                <a href={props.githubLink} target='_blank'><img src='../githubIcon.png' alt='github icon' className='github-icon'/> </a>
            </div>


        </div>
    )
}