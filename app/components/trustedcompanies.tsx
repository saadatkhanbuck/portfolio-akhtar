/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

// Trusted companies logos
const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Fiverr",
    logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  },
  {
    name: "Upwork",
    logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg",
  },
  {
    name: "Freelancer",
    logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
  },

  {
    name: "Guru",
    logo: "https://cdn.worldvectorlogo.com/logos/guru-1.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
  },
];

const CompanyCard = ({ logo, name }: { logo: string; name: string }) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center",
      "w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36",
      "p-3 sm:p-4",
      "rounded-xl bg-white/30 backdrop-blur-md border border-white/20",
      "shadow-lg transition-all duration-500",
      "hover:scale-105 hover:shadow-2xl hover:bg-white/50"
    )}
  >
    <img
      src={logo}
      alt={name}
      className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-2"
    />
    <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white text-center">
      {name}
    </p>
  </div>
);

export function TrustedCompanies() {
  return (
    <div
      className="
        relative flex flex-col md:flex-row
        min-h-[28rem] md:h-[24rem]
        w-full gap-6 overflow-hidden
        rounded-3xl p-4 sm:p-6 
      "
    >
      {/* Left Section */}
      <div
        className="
          flex flex-col justify-center
          w-full md:w-1/4
          bg-white/40 backdrop-blur-lg
          rounded-3xl p-5 sm:p-6
          shadow-md animate-float-slow
        "
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Trusted By
        </h2>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
          These amazing companies have trusted my skills and work on multiple
          projects.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
          alt="Happy Clients"
          className="w-20 sm:w-24 md:w-28 mx-auto animate-bounce-slow"
        />
      </div>

      {/* Right Section: Marquee */}
      <div className="flex-1 flex items-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:18s]">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </Marquee>
      </div>

      {/* Floating Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-blue-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
}
