import '../css/Stats.css';

const stats = [
    {
        number: '4.8/5',
        label: 'Google Rating'
    },
    {
        number: '6',
        label: 'OPD Days a Week'
    },
    {
        number: '5',
        label: 'Specialised Services'
    },
    {
        number: '2',
        label: 'In-house Facilities'
    }
];

export default function Stats() {
    return (
        <section className="stats-section">

            <div className="stats-container">

                {stats.map((stat, index) => (

                    <div className="stats-item" key={index}>

                        <h2>{stat.number}</h2>

                        <p>{stat.label}</p>

                    </div>

                ))}

            </div>

        </section>
    );
}