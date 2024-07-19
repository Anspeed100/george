import React from 'react';
import PropTypes from 'prop-types';
import QuoteStart from './SVGIcons/QuoteStart';
import QuoteEnd from './SVGIcons/QuoteEnd';

const QuoteComponent = ({ backgroundColor, quoteText, authorText, quoteColor, textColor }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center p-4 md:p-10 xl:p-20" style={{ backgroundColor }}>
      <div className="flex flex-col gap-4 max-w-4xl">
        <QuoteStart fillColor={quoteColor} size={40} className="w-4 h-2 md:w-6 md:h-3 self-start" />
        <div className="flex flex-col">
          <div className="flex w-full items-center">
            <p className="text-xl md:text-3xl lg:text-5xl font-semibold text-justify" style={{ color: textColor }}>
              {quoteText}
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <p className="text-lg md:text-2xl font-canarobook" style={{ color: textColor }}>
              {authorText}
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <QuoteEnd size={40} fillColor={quoteColor} className="w-8 h-4 md:w-12 md:h-6 self-end" />
        </div>
      </div>
    </div>
  );
};

QuoteComponent.propTypes = {
  backgroundColor: PropTypes.string,
  quoteText: PropTypes.string.isRequired,
  authorText: PropTypes.string.isRequired,
  quoteColor: PropTypes.string,
  textColor: PropTypes.string,
};

QuoteComponent.defaultProps = {
  backgroundColor: '#b92026', 
  quoteColor: '#fff',
  textColor: '#fff'
};

export default QuoteComponent;
