import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <article className="space-y-24 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="pt-6  ml-6 text-2xl md:text-4xl">Projetos Recentes</h2>

      <ul className="flex flex-wrap gap-12 justify-center">
        {projects.map(({ slug, name, image }, index) => (
          <li className="pl-6 text-md relative" key={name + index}>
            <Image
              src={image.url}
              alt={image.alt}
              width={250}
              height={250}
              className="object-cover rounded-2xl h-[12rem] mb-4 background: #fffff"
            />
            <span>{name}</span>
            <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
              <span>{index + 1}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
