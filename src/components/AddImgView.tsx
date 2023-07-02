interface IAddImgView {
  img: string;
  onClearItem: () => void;
}

const AddImgView = ({ img, onClearItem }: IAddImgView) => {
  return (
    <div className="modal">
      <div className="modal-back" onClick={onClearItem}></div>
      <img src={img} alt="img" className="w-imgWidth h-imgHeight bg-white" />
    </div>
  );
};

export default AddImgView;
