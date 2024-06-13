import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const AboutComponent = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl overflow-hidden bg-cover bg-no-repeat py-8 dark:text-gray-300 md:py-12"
      id="action"
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-5 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          About Us
        </h2>
        <p className="mb-8 text-sm font-light md:text-lg">
          Join our community and unleash the power of collaboration!
        </p>
        <div className="flex flex-col gap-8 md:flex-row">
          <Card className="flex-1 bg-black font-semibold text-white">
            <CardHeader>
              <CardTitle>Who We Are?</CardTitle>
              <br />
              <CardDescription className="text-left">
                UVAI is a union built by and for VFX & Animation artists in
                India. We&apos;re a passionate community of artists dedicated to
                empowering each other and advocating for a thriving VFX &
                Animation industry.
              </CardDescription>
              <CardDescription className="text-left">
                <strong>We are your voice:</strong>
                <br />
                Unlike a traditional organization, UVAI is a collective force
                driven by your needs and aspirations. We understand the unique
                challenges faced by VFX and Animation artists in India. Through
                collective action, we champion fair treatment, competitive
                compensation, and a secure work environment.
              </CardDescription>
              <CardDescription className="text-left">
                <strong>We are your support system:</strong>
                <ul className="list-disc pl-5">
                  <li>
                    Skill development: Upskill with access to industry-led
                    workshops, online courses, and mentorship programs.
                  </li>
                  <li>
                    Financial security: Explore competitive health insurance
                    plans and other valuable benefits.
                  </li>
                  <li>
                    Community connection: Network with fellow artists, share
                    your passion, and collaborate on projects.
                  </li>
                  <li>
                    Industry insights: Access curated resources, industry
                    trends, and job openings to stay informed.
                  </li>
                </ul>
                By joining UVAI, you become part of a movement: We believe a
                strong, united community is the key to achieving positive
                change. By joining forces, we can negotiate better working
                conditions, advocate for fair pay, and create an environment
                where creativity flourishes.
                <br />
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex-1 bg-black font-semibold text-white">
            <CardHeader>
              <CardTitle>Why Unionise?</CardTitle>
              <br />
              <CardDescription className="text-left">
                The Indian VFX & Animation industry is brimming with talent, yet
                many artists face challenges that hinder their careers and
                well-being. Here at UVAI, we believe your artistic passion
                deserves fair treatment, secure work environments, and the
                opportunity to flourish.
              </CardDescription>
              <CardDescription className="text-left">
                Here&apos;s why unionizing with UVAI makes a difference:
                <ul className="list-disc pl-5">
                  <li>
                    Stand Up for Fair Pay: Negotiate for competitive salaries
                    and benefits that reflect your skills and the value you
                    bring to projects. Don&apos;t settle for compensation that
                    doesn&apos;t recognize your contributions.
                  </li>
                  <li>
                    Combat Unpredictable Schedules: UVAI fights for reasonable
                    working hours with clear overtime policies. You
                    shouldn&apos;t have to sacrifice your personal life for your
                    career.
                  </li>
                  <li>
                    Embrace Job Security: Fear of contract renewal should not be
                    a constant worry. Unionization provides a safety net,
                    ensuring fair treatment and protection against arbitrary
                    decisions.
                  </li>
                  <li>
                    Bridge the Gender Pay Gap: UVAI advocates for equal pay for
                    equal work, regardless of gender or background. We believe
                    in a diverse and inclusive industry where talent is valued,
                    not discriminated against.
                  </li>
                  <li>
                    Modernize the Industry: Unions push for industry-wide
                    standards that promote healthy work practices and
                    sustainable careers.
                  </li>
                </ul>
                Together, we can create a thriving VFX & Animation industry in
                India, where artists are empowered to reach their full
                potential.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* <Card className="flex-1">
            <CardHeader>
              <CardTitle>How to Form a Union?</CardTitle>
              <br />
              <CardDescription className="text-left">
                To form a union, we need to gather support from fellow workers,
                elect representatives, and follow the legal procedures for
                recognition.
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </div>
    </section>
  );
};
