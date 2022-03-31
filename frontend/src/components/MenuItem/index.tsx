type Props = {
  textButton: string
};

function MenuItem({ textButton }: Props) {
  return (
    <>
      Item de Menu - {textButton}
    </>
  );
};

export default MenuItem;