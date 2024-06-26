import React, { createRef, useState, useEffect } from 'react';
import objectAssign from 'object-assign';
var LocationIframe = function (_a) {
  var url = _a.url,
    allowFullScreen = _a.allowFullScreen,
    position = _a.position,
    display = _a.display,
    height = _a.height,
    width = _a.width,
    overflow = _a.overflow,
    styles = _a.styles,
    onLoad = _a.onLoad,
    onMouseOver = _a.onMouseOver,
    onMouseOut = _a.onMouseOut,
    scrolling = _a.scrolling,
    id = _a.id,
    frameBorder = _a.frameBorder,
    ariaHidden = _a.ariaHidden,
    sandbox = _a.sandbox,
    allow = _a.allow,
    className = _a.className,
    title = _a.title,
    ariaLabel = _a.ariaLabel,
    ariaLabelledby = _a.ariaLabelledby,
    name = _a.name,
    target = _a.target,
    loading = _a.loading;
  var iFrameRef = createRef();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };
    const iframe = iFrameRef.current;
    iframe.addEventListener('load', handleLoad);
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);
  var defaultProps = objectAssign({
    ref: iFrameRef,
    src: url,
    target: target || '_parent',
    allowFullScreen: allowFullScreen || false,
    style: {
      position: position || 'absolute',
      display: display || 'block',
      height: height || '100%',
      width: width || '100%',
      overflow: overflow || 'hidden',
    },
    scrolling: scrolling || 'no',
    frameBorder: frameBorder || 0,
    height: height || '100%',
    sandbox: sandbox || null,
    loading: loading || null,
    styles: styles || null,
    name: name || null,
    className: className || null,
    title: title || null,
    allow: allow || null,
    id: id || null,
    'aria-labelledby': ariaLabelledby || null,
    'aria-hidden': ariaHidden || null,
    'aria-label': ariaLabel || null,
    width: width || '100%',
    onLoad: onLoad || null,
    onMouseOver: onMouseOver || null,
    onMouseOut: onMouseOut || null,
  });
  var props = Object.create(null);
  for (var _i = 0, _b = Object.keys(defaultProps); _i < _b.length; _i++) {
    var prop = _b[_i];
    if (defaultProps[prop] != null) {
      props[prop] = defaultProps[prop];
    }
  }
  return (
    <>
      {isLoading && (
        <div className="text-center py-[200px]">
         loading-----
        </div>
      )}
      <iframe {...props} />
    </>
  );
};
export default LocationIframe;