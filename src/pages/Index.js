import { Link } from "react-router-dom";

export default function Index({ clicked, setClicked }) {
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <section className="index page">
      <h1>Welcome to Yoga!</h1>
      <p className="target">
        Anyone with or without an interest in yoga is welcome. Find out all
        about yoga.
      </p>
      <h2 className="italic">Yoga: Its meaning</h2>
      <h2>Definition</h2>
      <p>
        Yoga is a physical, mental and spiritual practice that originated in
        ancient India. First codified by the sage Patanjali in his Yoga Sutras
        around 400 C.E, the practice was in fact handed down from teacher to
        student long before this text arose. Traditionally, this was a
        one-to-one transmission, but since yoga became popular in the West in
        the 20th century, group classes have become the norm.
        <br /> The word yoga is derived from the Sanskrit root yuj, meaning “to
        yoke,” or “to unite”. The practice aims to create union between body,
        mind and spirit, as well as between the individual self and universal
        consciousness. Such a union tends to neutralize ego-driven thoughts and
        behaviours, creating a sense of spiritual awakening. <br /> Yoga has
        been practiced for thousands of years, and whilst many different
        interpretations and styles have been developed, most tend to agree that
        the ultimate goal of yoga is to achieve liberation from suffering.
        Although each school or tradition of yoga has its own emphasis and
        practices, most focus on bringing together body, mind and breath as a
        means of altering energy or shifting consciousness.
      </p>
      <h2>Yogapedia explains Yoga</h2>
      <p>
        Modern yoga is most commonly associated with the physical practice of
        asana, a series of postures often weaved together in styles such as
        Vinyasa Flow or Ashtanga. Asana practice is generally intended to build
        strength and stamina, to improve flexibility, coordination and balance,
        and to relax the body. However, this provides only one small aspect of
        the tradition of yoga as a whole.
        <br /> Patanjali’s Yoga Sutras provide the traditional foundation of
        yoga, in which he outlines an eightfold path of the practice. Known as
        the ‘Eight Limbs of Yoga,’ this path offers a guide to individuals who
        are dedicated to creating a union between body, mind and spirit.
        <br /> Each of the Eight Limbs offers a means of living with more
        integrity, self-discipline, respect for nature and connection with the
        spiritual aspects of life. These eight practices are intended to be
        carried out in a holistic and integrative manner:
      </p>
      <div className="table_sec">
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="2">
                <caption className="caption">
                  <strong>Movie datasheet</strong>
                  <details className="details">
                    <summary>Help</summary>
                    <p>
                      In this table you will find the following rows: Release
                      Date, Title, IMDb's rating
                    </p>
                  </details>
                </caption>
              </td>
            </tr>
            <tr>
              <td>Yamas</td>
              <td>
                Five universal, ethical and moral observances to live by
                (nonviolence, truthfulness, non-stealing, continence and
                non-covetousness)
              </td>
            </tr>
            <tr>
              <td>Niyamas</td>
              <td>
                Five spiritual and self-discipline observances (cleanliness,
                contentment, spiritual austerities, study of scriptures and
                surrender to God)
              </td>
            </tr>
            <tr>
              <td>Asana</td>
              <td>
                physical posture, originally intended only for seated
                meditation, but more recently adapted to encompass all physical
                yoga practices
              </td>
            </tr>
            <tr>
              <td>Pranayama</td>
              <td>
                breathing exercises to control the flow of prana (vital life
                force)
              </td>
            </tr>
            <tr>
              <td>Pratyahara</td>
              <td>Withdrawal of the senses</td>
            </tr>
            <tr>
              <td>Dharana</td>
              <td>Single pointed concentration</td>
            </tr>
            <tr>
              <td>Dhyana</td>
              <td>Meditation</td>
            </tr>
            <tr>
              <td>Samadhi</td>
              <td>Liberation or blissful union with the Divine</td>
            </tr>
          </tbody>
        </table>
        <img
          src={process.env.PUBLIC_URL + "./images/img01.png"}
          alt="Types of yoga"
        />
      </div>
      <h2 className="italic">Yoga: Its Origin, History and Development</h2>
      <h2>Origin</h2>
      <p>
        Yoga is essentially a spiritual discipline based on an extremely subtle
        science, which focuses on bringing harmony between mind and body. It is
        an art and science of healthy living. <br /> The word ‘Yoga’ is derived
        from the Sanskrit root ‘Yuj’, meaning ‘to join’ or ‘to yoke’ or ‘to
        unite’. As per Yogic scriptures the practice of Yoga leads to the union
        of individual consciousness with that of the Universal Consciousness,
        indicating a perfect harmony between the mind and body, Man & Nature.
        <br />
        According to modern scientists, everything in the universe is just a
        manifestation of the same quantum firmament. One who experiences this
        oneness of existence is said to be in yoga, and is termed as a yogi,
        having attained to a state of freedom referred to as mukti, nirvana or
        moksha. Thus the aim of Yoga is Self-realization, to overcome all kinds
        of sufferings leading to 'the state of liberation' (Moksha) or 'freedom'
        (Kaivalya). Living with freedom in all walks of life, health and harmony
        shall be the main objectives of Yoga practice.
        <br />
        "Yoga” also refers to an inner science comprising of a variety of
        methods through which human beings can realize this union and achieve
        mastery over their destiny .Yoga, being widely considered as an
        'immortal cultural outcome' of Indus Saraswati Valley civilization –
        dating back to 2700 B.C., has proved itself catering to both material
        and spiritual upliftment of humanity.Basic humane values are the very
        identity of Yoga Sadhana.
      </p>
      <h2>History</h2>
      <p>
        The practice of Yoga is believed to have started with the very dawn of
        civilization. The science of yoga has its origin thousands of years ago,
        long before the first religions or belief systems were born. <br />
        In the yogic lore, Shiva is seen as the first yogi or Adiyogi, and the
        first Guru or Adi Guru. Several Thousand years ago, on the banks of the
        lake Kantisarovar in the Himalayas, Adiyogi poured his profound
        knowledge into the legendary Saptarishis or "seven sages”. The sages
        carried this powerful yogic science to different parts of the world,
        including Asia, the Middle East, Northern Africa and South America.{" "}
        <br />
        Interestingly, modern scholars have noted and marvelled at the close
        parallels found between ancient cultures across the globe. However, it
        was in India that the yogic system found its fullest expression.
        Agastya, the Saptarishi who travelled across the Indian subcontinent,
        crafted this culture around a core yogic way of life.
      </p>
      <div className="history">
        <img
          src={process.env.PUBLIC_URL + "./images/img02.png"}
          alt="500-800 History"
        />
        <p>
          500 BC - 800 A.D. <br />
          Tentatively, the period between 500 BC - 800 A.D. is considered as the
          Classical period which is also considered as the most fertile and
          prominent period in the history and development of Yoga. <br /> During
          this period, commentaries of Vyasa on Yoga Sutras and Bhagawadgita
          etc. came into existence.This period can be mainly dedicated to two
          great religious teachers of India –Mahavir and Buddha. The concept of
          Five great vows – Pancha mahavrata- by Mahavir and Ashta Magga or
          eightfold path by Buddha - can be well considered as early nature of
          Yoga sadhana. We find its more explicit explanation in Bhagawadgita
          which has elaborately presented the concept of Gyan yoga, Bhakti yoga
          and Karma Yoga. <br /> These three types of yoga are still the highest
          example of human wisdom and and even to day people find peace by
          following the methods as shown in Gita. Patanjali’s yoga sutra besides
          containing various aspects of yoga, is mainly identified with eight
          fold path of Yoga.
        </p>
      </div>
      <div className="history">
        <img
          src={process.env.PUBLIC_URL + "./images/img03.png"}
          alt="800-1700 History"
        />
        <p>
          800 A.D. - 1700 A.D. <br />
          The very important commentary on Yoga sutra by Vyasa was also written.
          During this very period the aspect of mind was given importance and it
          was clearly brought out through Yoga sadhana, Mind and body both can
          be brought under control to experience equanimity. <br /> The period
          between 800 A.D. - 1700 A.D. has been recognized as the Post Classical
          period wherein the teachings of great Acharyatrayas-Adi Shankracharya,
          Ramanujacharya, Madhavacharya-were prominent during this period.
          <br /> The teachings of Suradasa, Tulasidasa, Purandardasa, Mirabai
          were the great contributors during this period. The Natha Yogis of
          Hathayoga Tradition like Matsyendaranatha, Gorkshanatha,
          Cauranginatha, Swatmaram Suri, Gheranda, Shrinivasa Bhatt are some of
          the great personalities who popularized the Hatha Yoga practices
          during this period.
        </p>
      </div>
      <div className="history">
        <img
          src={process.env.PUBLIC_URL + "./images/img04.png"}
          alt="1700-1900 History"
        />
        <p>
          1700 - 1900 A.D. <br />
          The period between 1700 - 1900 A.D. is considered as Modern period in
          which the great Yogacharyas- Ramana Maharshi, Ramakrishna Paramhansa,
          Paramhansa Yogananda, Vivekananda etc. have contributed for the
          development of Raja Yoga. <br /> This was the period when Vedanta,
          Bhakti yoga, Nathayoga or Hatha-yoga flourished. The Shadanga-yoga of
          Gorakshashatakam, Chaturanga-yoga of Hathayogapradipika, Saptanga-yoga
          of Gheranda Samhita, were the main tenents of Hatha-yoga. <br /> Now
          in the contemporary times, everybody has conviction about yoga
          practices towards the preservation, maintenance and promotion of
          health. Yoga has spread all over the world by the teachings of great
          personalities like Swami Shivananda, Shri T.Krishnamacharya, Swami
          Kuvalayananda, Shri Yogendara, Swami Rama, Sri Aurobindo, Maharshi
          Mahesh Yogi, Acharya Rajanish, Pattabhijois, BKS. Iyengar, Swami
          Satyananda Sarasvati and the like.
        </p>
      </div>
      <aside>
        <p className={`link ${clicked ? "clicked" : ""}`} onClick={handleClick}>
          <Link to="https://yoga.ayush.gov.in/Yoga-History/" target="_blank">
            More info about yoga history
          </Link>
          <span className="icon">
            <i className="xi-arrow-right"></i>
          </span>
        </p>
      </aside>
      <footer>
        <h1>So Yoga is... (Conclusion)</h1>
        <p>
          Yoga works on the level of one’s body, mind, emotion and energy.{" "}
          <br />
          This has given rise to four broad classifications of Yoga: karma yoga,
          where we utilize the body; bhakti yoga, where we utilize the emotions;
          gyana yoga, where we utilize the mind and intelect; and kriya yoga,
          where we utilize the energy. Each system of Yoga we practice would
          fall within the gamut of one or more of these categories. <br /> Every
          individual is a unique combination of these four factors. "All the
          ancient commentaries on Yoga have stressed that it is essential to
          work under the direction of a Guru.” The reason being that only a Guru
          can mix the appropriate combination of the four fundamental paths, as
          is necessary for each seeker. <br /> Yoga Education:Tradiitionally,
          Yoga Education was imparted by knowledgeable, experienced, and wise
          persons in the families (comparable with the education imparted in
          convents in the west) and then by the Seers (Rishis/Munis/Acharyas) in
          Ashramas (compared with monastries). Yoga Education, on the other
          hand, aims at taking care of the individual, the 'Being'. It is
          presumed that a good, balanced, integrated, truthful, clean,
          transparent person will be more useful to oneself, family, society,
          nation, nature and humanity at large. <br />
          Yoga education is 'Being oriented'. Details of working with 'being
          oriented' aspect have been outlined in various living traditions and
          texts and the method contributing to this important field is known as
          'Yoga'.
        </p>
      </footer>
    </section>
  );
}
