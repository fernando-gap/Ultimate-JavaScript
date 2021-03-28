// Built-ins

/**
 * Structured Data
 */


ArrayBuffer
/* 

The ArrayBuffer object is used to represent a generic, fixed
-length raw binary data buffer.
It is an array of bytes, often referred to in other languages
as a "byte array".You cannot directly manipulate the contents
of an ArrayBuffer; instead, you create one of the typed array
objects or a DataView object which represents the buffer in a
specific format, and use that to read and write the contents
of the buffer.
The ArrayBuffer() constructor creates a new ArrayBuffer of 
the given length in bytes. You can also get an array buffer
from existing data, for example from a Base64 string or from
a local file.

*/


SharedArrayBuffer
/* 

The SharedArrayBuffer object is used to represent a generic,
fixed-length raw binary data buffer, similar to the ArrayBuffer 
object, but in a way that they can be used to create views on
shared memory. Unlike an ArrayBuffer, a SharedArrayBuffer 
cannot become detached.

*/


Atomics 
/* 

The Atomics object provides atomic operations as static 
methods. They are used with SharedArrayBuffer and ArrayBuffer
objects.
The Atomic operations are installed on an Atomics module. 
Unlike the other global objects, Atomics is not a constructor.
You cannot use it with a new operator or invoke the Atomics 
object as a function. All properties and methods of Atomics 
are static (as is the case with the Math object, for example).

*/


DataView
/*

The DataView view provides a low-level interface for reading
and writing multiple number types in a binary ArrayBuffer, 
without having to care about the platform's endianness.
Multi-byte number formats are represented in memory differently
depending on machine architecture — see Endianness for an 
explanation. DataView accessors provide explicit control of 
how data is accessed, regardless of the executing computer's
endianness.

*/
