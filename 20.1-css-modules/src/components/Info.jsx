import './Info.css';
// Импортируем модульный css документ
import styles from './Info.module.css';
// styles - это объект со свойствами в котором прописаны наши классы из css документа

console.log(styles);

function Info() {
    return (
        // Устанавливаем класс элементу из объекта styles
        <div className={styles.info}>
            <h1>Hello form the Info component</h1>
            <button className="my-button">Click me</button>
        </div>
    );
}

export default Info;
