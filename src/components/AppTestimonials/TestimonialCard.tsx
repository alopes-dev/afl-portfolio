import { cn } from "@/lib/utils";
import { ITestimonial } from "@/types/global";
import Image from "next/image";

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: ITestimonial;
}) => {
  return (
    <div
      data-testimonial-id={testimonial.id}
      className={cn(
        "rounded-xl border py-6 px-6 shadow-sm transition-all duration-300",
        "bg-light-100 text-dark-900 dark:bg-dark-800 dark:text-light-100",
        "border-light-300 dark:border-dark-700",
        "hover:shadow-md hover:translate-y-[-4px] border-[1px] border-solid",
        testimonial.active
          ? "border-[1px] border-solid dark:border-purple-dark bg-purple dark:bg-dark-800 opacity-100"
          : "bg-dark-800/30 dark:bg-dark-800 opacity-80"
      )}
    >
      <div className="flex flex-col gap-4 h-full">
        {testimonial.text ? (
          <p className="text-light-800 dark:text-dark-300 text-sm italic">
            {`"${testimonial.text}"`}
          </p>
        ) : testimonial.imageSrc ? (
          <div className="relative w-full h-40 rounded-md overflow-hidden">
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.imageAlt || `Project by ${testimonial.name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ) : null}
        <div className="mt-auto pt-4 border-t border-light-300 dark:border-dark-700">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-[1px] border-solid border-light-300">
              <Image
                src={testimonial.avatarSrc}
                alt={`${testimonial.name} avatar`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-light-950 dark:text-dark-100">
                {testimonial.name}
              </p>
              <p className="text-xs text-purple-dark dark:text-purple-light">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
