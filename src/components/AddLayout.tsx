interface IAddLayout {
  title: string;
  input: any;
  onAdd: () => void;
}

const AddLayout = ({ title, input, onAdd }: IAddLayout) => {
  return (
    <div>
      <div className="font-bold mb-2">{title}</div>
      <div>
        <input
          type="text"
          className="recipe-input"
          value={input.value}
          onChange={input.onChange}
        />
        <button className="add-button bg-shadowBlue ml-1" onClick={onAdd}>
          등록
        </button>
      </div>
    </div>
  );
};

export default AddLayout;
