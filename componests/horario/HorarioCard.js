import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import styles from './HorarioCard.module.css';
import axios from 'axios';

function HorarioCard({ id, name, horario, category, handleRemove }) {
  const navigation = useNavigation();

  const remove = async (e) => {
    e.preventDefault();
    try {
      await handleRemove(id);
    } catch (error) {
      console.error('Erro ao remover horário:', error);
    }
  };

  const formatHorario = (dateString) => {
    if (!dateString) return 'Horário não disponível';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Data inválida';
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleString('pt-BR', options);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Horário:</span> {formatHorario(horario)}
      </p>
      <p className={styles.category_text}>
        <span className={styles.category}>
          Categoria: {category || 'Sem categoria'}
        </span>
      </p>
      <div className={styles.project_card_actions}>
        <TouchableOpacity onPress={() => navigation.navigate('HorarioCard', { id })}>
          <BsPencil className={styles.icon} /> Editar
        </TouchableOpacity>
        <button onClick={remove}>
          <BsFillTrashFill className={styles.icon} /> Excluir
        </button>
      </div>
    </div>
  );
}

export default HorarioCard;
