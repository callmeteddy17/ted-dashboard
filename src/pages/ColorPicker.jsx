import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="md:m-5 m-10 md:p-5 p-10 bg-white rounded-3xl">
      <Header category={'App'} title={'Color Picker'} />
      <div className="text-center">
        <div id="preview">
          <div className="flex justify-center items-center gap-20 flex-wrap">
            <div>
              <p className="text-2xl font-semibold mt-20 mb-4">
                Inline Pallete
              </p>
              <ColorPickerComponent
                id="inline-pallete"
                mode="Pallete"
                inline
                modeSwitcher={false}
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
