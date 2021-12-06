import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'

import { ProjectContainer } from './styles'

interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

export function ProjectItem({
  title,
  type,
  slug,
  imgUrl
}: ProjectItemProps) {
  return (
    <ProjectContainer imgUrl={imgUrl} data-aos="fade-right">
      <section>
        <div className="overlay" />
        <div className="text-content">
          <h1>{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button>
        <Link href={`/projetos/${slug}`}>
          <a>Ver mais <AiOutlineRightCircle /></a>
        </Link>
      </button>
    </ProjectContainer>
  )
}