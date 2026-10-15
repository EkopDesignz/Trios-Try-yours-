
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Greenbyte Technologies",
    location: "Remote · Nigeria",
    type: "Full-time",
    salary: "₦250k–₦450k / month",
    category: "Engineering",
    color: "mint",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Nexa Digital",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    salary: "₦200k–₦350k / month",
    category: "Design",
    color: "violet",
  },
  {
    id: 3,
    title: "Junior Backend Developer",
    company: "CloudSpring",
    location: "Remote · Africa",
    type: "Full-time",
    salary: "Competitive",
    category: "Engineering",
    color: "blue",
  },
  {
    id: 4,
    title: "Technical Content Creator",
    company: "Build Africa",
    location: "Remote",
    type: "Contract",
    salary: "Negotiable",
    category: "Content",
    color: "orange",
  },
];

const categories = ["All opportunities", "Engineering", "Design", "Content"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All opportunities");
  const [saved, setSaved] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("Discover");

  const filteredJobs = useMemo(() => {
    const search = query.toLowerCase().trim();

    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        `${job.title} ${job.company} ${job.location} ${job.category}`
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        category === "All opportunities" || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  function toggleSaved(id: number) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="trios-app">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Trios home">
          <span className="brand-mark">T</span>
          <span>trios<span className="brand-dot">.</span></span>
        </a>

        <div className="top-search">
          <Search size={18} />
          <input
            aria-label="Search jobs, companies and skills"
            placeholder="Search jobs, companies, skills..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <kbd>⌘ K</kbd>
        </div>

        <div className="top-actions">
          <button className="icon-button" aria-label="Notifications">
            <Bell size={19} />
          </button>
          <button className="avatar" aria-label="Your profile">A</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <p className="eyebrow">YOUR WORKSPACE</p>

          {[
            { label: "Discover", icon: Compass },
            { label: "Jobs", icon: BriefcaseBusiness },
            { label: "Network", icon: Users },
            { label: "Messages", icon: MessageCircle },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-link ${activeTab === label ? "active" : ""}`}
              onClick={() => setActiveTab(label)}
            >
              <Icon size={19} />
              <span>{label}</span>
              {label === "Messages" && <span className="nav-count">2</span>}
            </button>
          ))}

          <div className="sidebar-divider" />

          <p className="eyebrow">YOUR CAREER</p>
          <button className="nav-link" onClick={() => setActiveTab("Saved jobs")}>
            <CheckCircle2 size={19} />
            <span>Saved jobs</span>
            <span className="nav-count">{saved.length}</span>
          </button>

          <div className="sidebar-promo">
            <span className="promo-icon"><Sparkles size={18} /></span>
            <h3>Your next chapter starts here.</h3>
            <p>Discover opportunities that match your ambition.</p>
            <button onClick={() => setActiveTab("Jobs")}>
              Explore careers <ArrowRight size={15} />
            </button>
          </div>

          <p className="sidebar-footer">TRIOS · TRY YOURS</p>
        </aside>

        <section className="main-content">
          <div className="welcome-row">
            <div>
              <p className="welcome-kicker">YOUR FUTURE, IN MOTION</p>
              <h1>Find your <span>next.</span></h1>
              <p className="welcome-copy">
                Meaningful work. Genuine connections. A career on your terms.
              </p>
            </div>
            <div className="welcome-symbol"><Sparkles size={28} /></div>
          </div>

          <section className="hero-card">
            <div className="hero-content">
              <span className="hero-label">
                <span className="live-dot" /> OPPORTUNITIES AWAIT
              </span>
              <h2>Your talent deserves<br />the right opportunity.</h2>
              <p>
                Explore new roles, meet forward-thinking teams,
                and take the next step in your professional journey.
              </p>
              <button
                className="primary-button"
                onClick={() => {
                  setActiveTab("Jobs");
                  document.getElementById("opportunities")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Explore opportunities <ArrowRight size={17} />
              </button>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="art-card art-card-one">
                <span className="art-icon"><BriefcaseBusiness size={23} /></span>
                <span><b>New possibilities</b><small>Start your journey</small></span>
              </div>
              <div className="art-card art-card-two">
                <span className="art-icon art-icon-light"><Users size={22} /></span>
                <span><b>Real connections</b><small>Grow your network</small></span>
              </div>
              <div className="art-center">T<span>.</span></div>
            </div>
          </section>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-icon"><BriefcaseBusiness size={18} /></span>
              <span><strong>Career opportunities</strong><small>Find your next move</small></span>
            </div>
            <div className="stat-item">
              <span className="stat-icon"><Users size={18} /></span>
              <span><strong>Professional network</strong><small>Meet your people</small></span>
            </div>
            <div className="stat-item">
              <span className="stat-icon"><Building2 size={18} /></span>
              <span><strong>Growing companies</strong><small>Build something great</small></span>
            </div>
          </div>

          <section id="opportunities" className="jobs-section">
            <div className="section-heading">
              <div>
                <p className="welcome-kicker">MADE FOR YOUR AMBITION</p>
                <h2>Explore opportunities</h2>
                <p>Find roles that fit your skills and the life you want to build.</p>
              </div>
              <span className="result-count">{filteredJobs.length} roles</span>
            </div>

            <div className="category-tabs">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "category-tab selected" : "category-tab"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {activeTab === "Saved jobs" ? (
              <div className="empty-state">
                <BriefcaseBusiness size={27} />
                <h3>Your saved opportunities</h3>
                <p>
                  {saved.length
                    ? `${saved.length} role${saved.length === 1 ? "" : "s"} saved.`
                    : "Save roles you love and find them here."}
                </p>
                <button onClick={() => setActiveTab("Jobs")}>Browse jobs</button>
              </div>
            ) : activeTab !== "Discover" && activeTab !== "Jobs" ? (
              <div className="empty-state">
                <Users size={27} />
                <h3>{activeTab}</h3>
                <p>This section is part of the Trios roadmap. We will connect it to real accounts and data next.</p>
                <button onClick={() => setActiveTab("Discover")}>Back to Discover</button>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="empty-state">
                <Search size={27} />
                <h3>No matching roles</h3>
                <p>Try a different search term or opportunity category.</p>
                <button onClick={() => { setQuery(""); setCategory("All opportunities"); }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="job-grid">
                {filteredJobs.map((job) => (
                  <article className="job-card" key={job.id}>
                    <div className="job-card-top">
                      <div className={`company-logo ${job.color}`}>
                        {job.company.charAt(0)}
                      </div>
                      <button
                        className={`save-button ${saved.includes(job.id) ? "is-saved" : ""}`}
                        onClick={() => toggleSaved(job.id)}
                        aria-label={saved.includes(job.id) ? "Unsave job" : "Save job"}
                        title={saved.includes(job.id) ? "Unsave job" : "Save job"}
                      >
                        {saved.includes(job.id) ? "♥" : "♡"}
                      </button>
                    </div>
                    <span className="job-category">{job.category}</span>
                    <h3>{job.title}</h3>
                    <p className="company-name">{job.company}</p>
                    <div className="job-meta">
                      <span><MapPin size={14} />{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                    <div className="job-card-bottom">
                      <strong>{job.salary}</strong>
                      <button
                        className="apply-button"
                        onClick={() => alert("Job applications will be connected to your Trios account in a later step.")}
                      >
                        View role <ArrowRight size={15} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <p className="demo-note">
              Demo listings for the initial preview. These are sample opportunities,
              not verified live vacancies.
            </p>
          </section>

          <footer className="page-footer">
            <a className="footer-brand" href="#">trios.</a>
            <span>Build your future. Find your people.</span>
            <span>© {new Date().getFullYear()} Trios — Try Yours</span>
          </footer>
        </section>
      </div>
    </main>
  );
}
