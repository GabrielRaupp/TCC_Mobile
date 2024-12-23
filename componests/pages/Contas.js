import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Contas.module.css';

function Contas() {
  const [data, setData] = useState({ users: [], horarios: [] });
  const [loading, setLoading] = useState(true);
  const [visibleHorarios, setVisibleHorarios] = useState({});
  const [newHorario, setNewHorario] = useState({
    name: '',
    horarios: '',
    category: '',
    avisoAntecedencia: '',
    discipline: '',
  });
  const [showDiscipline, setShowDiscipline] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/contas').then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contas</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.content}>
          <div className={styles.userList}>
            <h3>Usuários:</h3>
            {data.users.map((user, index) => (
              <div key={index} className={styles.userCard}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
          <div className={styles.horarioList}>
            <h3>Horários:</h3>
            {data.horarios.map((horario, index) => (
              <div key={index} className={styles.horarioCard}>
                <p>{horario.name}</p>
                <p>{horario.horarios}</p>
                <button onClick={() => setVisibleHorarios({ ...visibleHorarios, [horario._id]: !visibleHorarios[horario._id] })}>
                  Ver detalhes
                </button>
                {visibleHorarios[horario._id] && (
                  <div className={styles.details}>
                    <p>{horario.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contas;
