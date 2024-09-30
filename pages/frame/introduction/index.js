import style from './style.module.css' 

export default function Frame1() {
  return (
    <div className={style.section}>
      <div className={style.background}>
        <div className={style.langit}></div>
        <div className={style.awan1}></div>
        <div className={style.awan}></div>
        <div className={style.pandangan}></div>
      </div>
      <div className="d-flex px-3 justify-content-center flex-column g1 align-items-end">
        <div className="mb-3">
          <h1>Adventure Flower</h1>
        </div>
        <div className={style.handleposition}>
          <div className={style.btnStart}>Start</div>
        </div>
      </div>
    </div>
  );
}
