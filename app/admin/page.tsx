"use client";

import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    slug: "",
    category: "",
    title: "",
    price: "",
    duration: "",
    overview: "",
    pickupDrop: "",
    routeLine: "",
    banner: [] as File[],
    images: [] as File[],
    itinerary: [] as any[],
    inclusions: [] as string[],
    exclusions: [] as string[],
    otherInfo: [] as string[],
  });

  // ======================
  // FUNCTIONS (same as yours)
  // ======================

  const addItinerary = () => {
    setForm((prev) => ({
      ...prev,
      itinerary: [...prev.itinerary, { title: "", description: "" }],
    }));
  };

  const removeDay = (index: number) => {
    const arr = [...form.itinerary];
    arr.splice(index, 1);
    setForm({ ...form, itinerary: arr });
  };

  const handleBannerUpload = (files: FileList | null) => {
    if (!files) return;
    setForm((prev) => ({
      ...prev,
      banner: [...prev.banner, ...Array.from(files)],
    }));
  };

  const handleGalleryUpload = (files: FileList | null) => {
    if (!files) return;
    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...Array.from(files)],
    }));
  };

  const removeImage = (type: "banner" | "images", index: number) => {
    const arr = [...form[type]];
    arr.splice(index, 1);
    setForm({ ...form, [type]: arr });
  };

  const addField = (type: "inclusions" | "exclusions" | "otherInfo") => {
    setForm((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const updateField = (type: any, index: number, value: string) => {
    const arr = [...form[type]];
    arr[index] = value;
    setForm({ ...form, [type]: arr });
  };

  const removeField = (type: any, index: number) => {
    const arr = [...form[type]];
    arr.splice(index, 1);
    setForm({ ...form, [type]: arr });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "banner" || key === "images") {
        (value as File[]).forEach((file) =>
          formData.append(key, file)
        );
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });

    const res = await fetch("/api/trips", {
      method: "POST",
      body: formData,
    });

    alert(res.ok ? "Trip Created 🚀" : "Error ❌");
  };

  // ======================
  // 🎨 UI
  // ======================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg mb-6">
          <h1 className="text-3xl font-bold">🧳 Travel CMS Dashboard</h1>
          <p className="text-sm opacity-70">Create & manage trips easily</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* BASIC INFO */}
            <div className="card">
              <h2 className="title">📌 Basic Info</h2>

              <div className="grid gap-3">
                <input className="input" placeholder="Category"
                  onChange={(e) => setForm({ ...form, category: e.target.value })} />

                <input className="input" placeholder="Slug"
                  onChange={(e) => setForm({ ...form, slug: e.target.value })} />

                <input className="input" placeholder="Title"
                  onChange={(e) => setForm({ ...form, title: e.target.value })} />

                <input className="input" placeholder="Price"
                  onChange={(e) => setForm({ ...form, price: e.target.value })} />

                <input className="input" placeholder="Duration"
                  onChange={(e) => setForm({ ...form, duration: e.target.value })} />

                <input className="input" placeholder="Pickup Drop"
                  onChange={(e) => setForm({ ...form, pickupDrop: e.target.value })} />

                <input className="input" placeholder="Route Line"
                  onChange={(e) => setForm({ ...form, routeLine: e.target.value })} />

                <textarea className="textarea"
                  placeholder="Overview"
                  onChange={(e) => setForm({ ...form, overview: e.target.value })}
                />
              </div>
            </div>

            {/* ITINERARY */}
            <div className="card">
              <div className="flex justify-between items-center">
                <h2 className="title">📅 Itinerary</h2>
                <button className="btn" onClick={addItinerary}>+ Add</button>
              </div>

              {form.itinerary.map((item, i) => (
                <div key={i} className="box">
                  <div className="flex justify-between">
                    <strong>Day {i + 1}</strong>
                    <button onClick={() => removeDay(i)}>✕</button>
                  </div>

                  <input className="input mt-2"
                    placeholder="Title"
                    onChange={(e) => {
                      const arr = [...form.itinerary];
                      arr[i].title = e.target.value;
                      setForm({ ...form, itinerary: arr });
                    }}
                  />

                  <textarea className="textarea mt-2"
                    placeholder="Description"
                    onChange={(e) => {
                      const arr = [...form.itinerary];
                      arr[i].description = e.target.value;
                      setForm({ ...form, itinerary: arr });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* IMAGES */}
            <div className="card">
              <h2 className="title">🖼 Hero Images</h2>

              <input type="file" multiple onChange={(e) => handleBannerUpload(e.target.files)} />

              <div className="imgGrid">
                {form.banner.map((file, i) => (
                  <div key={i} className="imgBox">
                    <img src={URL.createObjectURL(file)} />
                    <button onClick={() => removeImage("banner", i)}>✕</button>
                  </div>
                ))}
              </div>
            </div>

            {/* GALLERY */}
            <div className="card">
              <h2 className="title">🖼 Gallery</h2>

              <input type="file" multiple onChange={(e) => handleGalleryUpload(e.target.files)} />

              <div className="imgGrid">
                {form.images.map((file, i) => (
                  <div key={i} className="imgBox">
                    <img src={URL.createObjectURL(file)} />
                    <button onClick={() => removeImage("images", i)}>✕</button>
                  </div>
                ))}
              </div>
            </div>

            {/* INCLUSIONS */}
            <div className="card">
              <h2 className="title">✔ Inclusions</h2>
              <button className="btn" onClick={() => addField("inclusions")}>+ Add</button>

              {form.inclusions.map((item, i) => (
                <input key={i} className="input mt-2"
                  value={item}
                  onChange={(e) => updateField("inclusions", i, e.target.value)}
                />
              ))}
            </div>

            {/* EXCLUSIONS */}
<div className="card">
  <h2 className="title">❌ Exclusions</h2>
  <button className="btn" onClick={() => addField("exclusions")}>+ Add</button>

  {form.exclusions.map((item, i) => (
    <div key={i} className="flex gap-2 mt-2">
      <input
        className="input"
        value={item}
        onChange={(e) => updateField("exclusions", i, e.target.value)}
      />
      <button onClick={() => removeField("exclusions", i)}>✕</button>
    </div>
  ))}
</div>

{/* OTHER INFO */}
<div className="card">
  <h2 className="title">ℹ Other Info</h2>
  <button className="btn" onClick={() => addField("otherInfo")}>+ Add</button>

  {form.otherInfo.map((item, i) => (
    <div key={i} className="flex gap-2 mt-2">
      <input
        className="input"
        value={item}
        onChange={(e) => updateField("otherInfo", i, e.target.value)}
      />
      <button onClick={() => removeField("otherInfo", i)}>✕</button>
    </div>
  ))}
</div>

          </div>
        </div>

        {/* SUBMIT */}
        <div className="text-center mt-6">
          <button onClick={handleSubmit} className="submitBtn">
            🚀 Publish Trip
          </button>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .card {
          background: white;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .input, .textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          margin-top: 8px;
        }

        .textarea {
          min-height: 80px;
        }

        .btn {
          background: black;
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
        }

        .imgGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 10px;
        }

        .imgBox {
          position: relative;
        }

        .imgBox img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          border-radius: 10px;
        }

        .imgBox button {
          position: absolute;
          top: -5px;
          right: -5px;
          background: red;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
        }

        .box {
          margin-top: 10px;
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 10px;
          background: #fafafa;
        }

        .submitBtn {
          background: linear-gradient(135deg, #000, #333);
          color: white;
          padding: 14px 40px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}