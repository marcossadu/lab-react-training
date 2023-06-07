import SingleColorPicker from './SingleColorPicker';


export default function RGBColorPicker() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
      >
      <SingleColorPicker color="r" />
      <SingleColorPicker color="g" />
      <SingleColorPicker color="b"/>
    </div>
  );
}
