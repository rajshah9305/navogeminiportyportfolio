import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services">
      <div className="container svc-container">
        <div className="svc-header reveal">
          <div className="label" style={{ justifyContent: "center" }}>Technical Capabilities</div>
          <h2 className="h-lg">End-to-End Solutions</h2>
          <p className="p-lg" style={{ margin: "0 auto" }}>Delivering robust technical architectures that align with business objectives, from database design to the user interface.</p>
        </div>
        
        {services.map((svc) => (
          <div className="svc-item interactive reveal" key={svc.id}>
            <div>
              <span className="svc-num">{svc.number}</span>
              <h3 className="svc-title">{svc.title}</h3>
            </div>
            <div>
              <p className="svc-desc">{svc.description}</p>
              <ul className="svc-list">
                {svc.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
