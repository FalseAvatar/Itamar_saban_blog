export function Footer() {
  return (
    <footer>
      <section>
        <h3>Personally Newsletter</h3>
        <p>
          A bi-weekly newsletter of design isnpiration, resources and anything
          related to career developmant.
        </p>
        <input type="email" placeholder="Email address"></input>
        <button type="submit">Subscribe</button>
      </section>
      <section>
        <p>
          Copyright{" "}
          <span>
            <datetime>2023</datetime>
          </span>
          - Itamar Saban
        </p>
      </section>
    </footer>
  );
}
