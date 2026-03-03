// src/pages/Team.jsx
import { Helmet } from "react-helmet-async";
import { team } from "../config";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team – RuttyBis Consult</title>
        <meta
          name="description"
          content="Meet the experienced compliance professionals behind RuttyBis Consult."
        />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Meet Our Team</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our dedicated professionals are here to guide you through every step of your compliance journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;