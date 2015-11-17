/* function
 * invert: Creates an object composed of the inverted keys and values of object.
 * If object contains duplicate values, subsequent values overwrite property
 * assignments of previous values unless multiValue is true.
 * object(object): The object to invert.
 * return(object): Returns the new inverted object.
 */

'keys each';

invert = function (obj)
{
    var ret = {};

    each(obj, function (val, key) { ret[val] = key });

    return ret;
};